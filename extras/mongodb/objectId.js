function ObjectIdDetails (id) {
  return {
    seconds: parseInt(id.slice(0, 8), 16),
    machineIdentifier: parseInt(id.slice(8, 14), 16),
    processId: parseInt(id.slice(14, 18), 16),
    counter: parseInt(id.slice(18, 24), 16)
  };
}

console.log(ObjectIdDetails("5dc3d2383b262a3827895439"));
