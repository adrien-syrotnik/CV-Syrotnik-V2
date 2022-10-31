const fs = require('fs'), PDFParser = require("pdf2json");

//import lodash
const _ = require('lodash');

const pdfParser = new PDFParser();


var convertLetterToNote = function (note) {
    switch (note) {
        case 'A':
            return 5;
        case 'B':
            return 4;
        case 'C':
        case '%20C%20' :
            return 3;
        case 'D':
            return 2;
    }
}

var convertNoteToLetter = function (note) {

    if (note >= 4.2) {
        return 'A';
    }
    else if (note >= 3.5) {
        return 'B';
    }
    else if (note >= 2.5) {
        return 'C';
    }
    else {
        return 'D';
    }

}

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {


    var dataInterresting = [];
    var notesFinal = [];
    var noteResumeInit = {
        resume: {
            note: undefined,
            coef: undefined
        },
        notes: []
    };
    var noteResumeTempo = { ...noteResumeInit };
    var noteInit = {
        note: undefined,
        coef: undefined
    }
    var noteTempo = { ...noteInit };


    pdfData.Pages.forEach(page => {

        page.Texts.forEach(text => {

            text.R.forEach(word => {

                


                if (['A', 'B', 'C', 'D','%20C%20', '1', '0', '2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(word.T)) {

                    console.log(word.T, text.x, text.y);

                    //Title note
                    if (text.x > 28 && text.x < 29) {
                        //dataInterresting.push(text);
                        if (noteResumeTempo.resume.note)
                            notesFinal.push(noteResumeTempo);
                        noteResumeTempo = { ...noteResumeInit };
                        noteResumeTempo.resume.note = convertLetterToNote(word.T);
                    }
                    //Title coef
                    else if (text.x > 32 && text.x < 33) {
                        //dataInterresting.push(text);
                        noteResumeTempo.resume.coef = Number(word.T);
                    }
                    //Note note
                    else if (text.x > 20 && text.x < 21) {
                        //dataInterresting.push(text);
                        noteResumeTempo.notes.push(noteTempo);
                        noteTempo = { ...noteInit };
                        noteTempo.note = convertLetterToNote(word.T);
                    }
                    //Note coef
                    else if (text.x > 24 && text.x < 25) {
                        //dataInterresting.push(text);
                        noteTempo.coef = Number(word.T);
                    }

                }

            })

        })

    })

    var n = 0;
    var r = 0;

    var nb = {
        A : 0,
        B : 0,
        C : 0,
        D : 0
    };

    notesFinal.forEach((note) => {

        note.notes.forEach(note2 => {
            if (note2.note) {
                //console.log(note2.note, ' ', note2.coef);
                n += note2.coef;
                r += note2.note * note2.coef;
                nb[convertNoteToLetter(note2.note)] += note2.coef;
            }
        });
    });

    console.log(r / n)
    console.log(nb)
    //console.log(pdfData.Pages[0].Texts.map(t => t.R[0]))
    //fs.writeFile("./test/F1040EZ.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("./test/synthese.pdf");