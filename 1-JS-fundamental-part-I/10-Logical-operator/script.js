const hasDriverLicense = false;
const hasPassedWrittenExam = true;

// console.log(hasDriverLicense && hasPassedWrittenExam);

// console.log(hasDriverLicense || hasPassedWrittenExam);

// console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasPassedWrittenExam;

if(shouldDrive) {
  console.log("You should drive");
} else {
  console.log("You shouldn't drive");
}