import { readFileSync, writeFile } from 'fs';
import { join } from 'path';

interface ZipCodeData {
    zipCode: string;
    _province: string;
    _city: string;
    _town: string;
    province: string;
    city: string;
    town: string;
}

interface ZipCodeMap {
    [key: string]: ZipCodeData;
}

const parseZipCode = (data: string): ZipCodeData => {
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
    ] = data.replace(/"/g, '').split(',');

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

const read = (fileName: string): ZipCodeData[] => {
    try {
        const data = readFileSync(fileName, 'utf-8');
        const lines = data.split(/\r?\n/).filter(line => line !== '');
        return lines.map(parseZipCode);
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
};

const write = (data: string, fileName: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        writeFile(fileName, data, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                reject(err);
                return;
            }
            console.log(`The data was written, open ${fileName} to confirm.`);
            resolve();
        });
    });
};

const main = async () => {
    const inputFile = join(__dirname, 'KEN_ALL.CSV');
    const outputFile = join(__dirname, 'codes.json');

    const codes = read(inputFile);
    const map: ZipCodeMap = {};

    codes.forEach((code) => {
        map[code.zipCode] = code;
    });

    try {
        await write(JSON.stringify(map), outputFile);
    } catch (err) {
        console.error('Failed to write data:', err);
        process.exit(1);
    }
};

// 检查是否作为主模块运行
if (require.main === module) {
    main();
}

export { ZipCodeData, ZipCodeMap, read, write, parseZipCode };
