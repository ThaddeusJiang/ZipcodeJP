const fs = require('fs');

const parseZipCode = (data) => {
  const [
    ,
    ,
    zipCode,
    _province,
    _city,
    _town,
    province,
    city,
    town,
  ] = data.replace(/"/gi, '').split(',');
  return {
    zipCode,
    _province,
    _city,
    _town,
    province,
    city,
    town,
  };
};

const read = (file_name) => {
  try {
    const data = fs.readFileSync(file_name, 'UTF-8');
    const lines = data.split(/\r?\n/).filter((line) => line !== '');
    const codes = lines.map(parseZipCode);

    return codes;
  } catch (err) {
    console.error(err);

    return [];
  }
};

const write = (data, file_name) => {
  fs.writeFile(file_name, data, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(`The data was written, open ${file_name} to confirm.`);
  });
};

const main = () => {
  const codes = read('./KEN_ALL.CSV');
  const map = {};
  codes.forEach((code) => {
    map[code.zipCode] = code;
  });
  write(JSON.stringify(map), 'codes.json');
};

main();
