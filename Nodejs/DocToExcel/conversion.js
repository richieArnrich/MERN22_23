// const fs = require("fs");
// const xlsx = require("xlsx");
// const readline = require("readline");

// const optionMapping = { a: 0, b: 1, c: 2, d: 3 };

// async function processFile(inputFile, outputFile) {
//   const fileStream = fs.createReadStream(inputFile);
//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity,
//   });

//   let data = [];
//   let questionNumber = 0;
//   let currentQuestion = "";
//   let correctAnswer = "";

//   for await (const line of rl) {
//     if (line.trim().startsWith("Question")) {
//       if (currentQuestion) {
//         data.push({
//           QuestionNumber: questionNumber,
//           Question: currentQuestion.trim(),
//           CorrectAnswer:
//             optionMapping[correctAnswer] !== undefined
//               ? optionMapping[correctAnswer]
//               : "",
//         });
//       }
//       questionNumber++;
//       currentQuestion = line.trim(); // Start new question
//       correctAnswer = ""; // Reset answer
//     } else if (line.trim().startsWith("Answer:")) {
//       const answerText = line.replace("Answer:", "").trim();
//       const answerOption = answerText.charAt(0).toLowerCase(); // Extract 'a', 'b', 'c', or 'd'
//       correctAnswer = answerOption;
//     } else {
//       currentQuestion += " " + line.trim(); // Append options and code to question
//     }
//   }

//   // Push the last question
//   if (currentQuestion) {
//     data.push({
//       QuestionNumber: questionNumber,
//       Question: currentQuestion.trim(),
//       CorrectAnswer:
//         optionMapping[correctAnswer] !== undefined
//           ? optionMapping[correctAnswer]
//           : "",
//     });
//   }

//   // Convert to Excel
//   const ws = xlsx.utils.json_to_sheet(data);
//   const wb = xlsx.utils.book_new();
//   xlsx.utils.book_append_sheet(wb, ws, "MCQs");
//   xlsx.writeFile(wb, outputFile);
//   console.log(`Excel file created: ${outputFile}`);
// }

// // Run the function
// processFile("questions.txt", "mcq_output.xlsx");
const fs = require("fs");
const xlsx = require("xlsx");
const readline = require("readline");

const optionMapping = { a: 0, b: 1, c: 2, d: 3 };

async function processFile(inputFile, outputFile) {
  const fileStream = fs.createReadStream(inputFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let data = [];
  let questionNumber = 0;
  let currentQuestion = "";
  let correctAnswer = "";
  let questionStarted = false;

  for await (const line of rl) {
    if (line.trim().startsWith("Question")) {
      // Save previous question before starting a new one
      if (questionStarted && currentQuestion) {
        data.push({
          QuestionNumber: questionNumber,
          Question: currentQuestion.trim(),
          CorrectAnswer:
            optionMapping[correctAnswer] !== undefined
              ? optionMapping[correctAnswer]
              : "",
        });
      }
      questionNumber++;
      currentQuestion = line.trim(); // Start new question
      correctAnswer = ""; // Reset answer
      questionStarted = true;
    } else if (line.trim().startsWith("Answer:")) {
      const answerText = line.replace("Answer:", "").trim();
      const answerOption = answerText.charAt(0).toLowerCase(); // Extract 'a', 'b', 'c', or 'd'
      correctAnswer = answerOption;
    } else {
      currentQuestion += "\n" + line.trim(); // Append with line break for proper formatting
    }
  }

  // Push the last question
  if (currentQuestion) {
    data.push({
      QuestionNumber: questionNumber,
      Question: currentQuestion.trim(),
      CorrectAnswer:
        optionMapping[correctAnswer] !== undefined
          ? optionMapping[correctAnswer]
          : "",
    });
  }

  // Convert to Excel
  const ws = xlsx.utils.json_to_sheet(data, { cellDates: true });

  // Apply formatting to wrap text
  const range = xlsx.utils.decode_range(ws["!ref"]);
  if (!ws["!cols"]) ws["!cols"] = [];
  if (!ws["!rows"]) ws["!rows"] = [];

  for (let C = range.s.c; C <= range.e.c; ++C) {
    ws["!cols"][C] = { width: 50 }; // Adjust column width for better readability
  }

  for (let R = range.s.r; R <= range.e.r; ++R) {
    const cell_address = xlsx.utils.encode_cell({ c: 1, r: R }); // Column 1 is "Question"
    if (ws[cell_address]) {
      ws[cell_address].v = ws[cell_address].v.replace(/\r?\n/g, "\n"); // Ensure proper line breaks
      ws[cell_address].s = { alignment: { wrapText: true } }; // Enable text wrapping
    }
  }

  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, "MCQs");
  xlsx.writeFile(wb, outputFile);
  console.log(`Excel file created: ${outputFile}`);
}

// Run the function
processFile("questions.txt", "mcq_output.xlsx");
