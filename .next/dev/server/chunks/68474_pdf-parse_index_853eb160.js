module.exports = [
"[project]/node_modules/.pnpm/pdf-parse@1.1.1/node_modules/pdf-parse/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const Pdf = __turbopack_context__.r("[project]/node_modules/.pnpm/pdf-parse@1.1.1/node_modules/pdf-parse/lib/pdf-parse.js [app-route] (ecmascript)");
module.exports = Pdf;
let isDebugMode = !module.parent;
//process.env.AUTO_KENT_DEBUG
//for testing purpose
if (isDebugMode) {
    let PDF_FILE = './test/data/05-versions-space.pdf';
    let dataBuffer = Fs.readFileSync(PDF_FILE);
    Pdf(dataBuffer).then(function(data) {
        Fs.writeFileSync(`${PDF_FILE}.txt`, data.text, {
            encoding: 'utf8',
            flag: 'w'
        });
        debugger;
    }).catch(function(err) {
        debugger;
    });
}
}),
];

//# sourceMappingURL=68474_pdf-parse_index_853eb160.js.map