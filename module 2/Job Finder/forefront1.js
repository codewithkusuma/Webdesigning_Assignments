function generateresume() {
    
    var qualification = document.getElementById("qualification").value;
    var experience = document.getElementById("experience").value;
    var jobdetails = document.getElementById("jobdetails").value;
   
  
    // Call OpenAI API to generate itinerary
    // Replace 'YOUR_API_KEY' with your actual OpenAI API key
    var apiKey = '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';
    var apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
   // var prompt = `Pretend you are my personal travel planner and generate a detailed itinerary for ${days} days trip to ${cities} from ${startDate} to ${endDate} in a tablular form with borders. The table should include four columns like date, time, and places to visit,Remarks. the remarks should include any special information like things to buy or things to eat in those specific locations.The journey should be planned according to date-wise and time-wise. Also generate a list of 10 items to pack while travelling to ${cities} and also generate a separate list of general tips and suggestions to follow while traveling to ${cities}. `;
    var prompt = `I want you to act as a my job consultant. My qualification is ${qualification} and I have ${experience} years of experience. I want to apply for a job and the job description is ${jobdetails}.Generate a creative resume template  for the me to match the above job description.`;
    axios.post(apiUrl, {
      prompt: prompt,
      max_tokens: 500,
      temperature: 1
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      var resume = response.data.choices[0].text; 
  //    document.getElementById("resume").innerHTML = resume;
      generateDownloadButton(resume);
    })
    .catch(function(error) {
      console.log(error);
    });
    // Import pdfmake library (make sure you have included the pdfmake library in your project)
// You may need to include this at the beginning of your script:
// const pdfMake = require('pdfmake');

function generateDownloadButton(resume) {
     var docDefinition = {
      content: [
        { text: 'resume', style: 'header' },
        { text: resume }
      ]
    };
  
    var pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBlob(function(blob) {
      var downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'resume.pdf';
      downloadLink.innerHTML = 'Download Resume (PDF)';
      document.getElementById("download").appendChild(downloadLink);
    });
  }
}