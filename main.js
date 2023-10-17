function trm() {
  let user = prompt("Write Anything With Space");

  console.log(`${user.trim()}`);


  document.write(`The Length after removing space is: ${user.trim().length}`);
}

function notrm() {
  let user = prompt("Write Anything With Space");

  console.log(`${user}`);

  document.write(`The Length after removing space is: ${user.length}`);
}
