// json Object 
// javascript Object Notation 
// it store key & value format 
// 1 dot operator 
// 2 square operator 
var jsonObj = {
    id: 9,
    'fname': 'Sumit',
    'lname': 'Raokhande'
};
// 1 dot operator
// console.log(`
//         ID          :: ${jsonObj.id}
//         First Name  :: ${jsonObj.fname}
//         Last Name   :: ${jsonObj.lname}
// `);
// 2 square operator 
// console.log(`
//     ========== Square Operator==========
//     ID          :: ${jsonObj["id"]}
//     First Name  :: ${jsonObj['fname']}
//     Last Name   :: ${jsonObj['lname']}
// `);
// Array of Object 
var arrObj = [
    {
        id: 9,
        'fname': 'Sumit',
        'lname': 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", "May", 'Dec'],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 65
            }
        ]
    },
    {
        id: 3,
        'fname': 'Spruha',
        'lname': 'Raokhande',
        country: {
            cid: 2,
            cname: 'US'
        },
        month: ["Feb", "July", 'Nov'],
        result: [
            {
                subj: "M1",
                marks: 45
            },
            {
                subj: "M2",
                marks: 48
            },
            {
                subj: "M3",
                marks: 75
            }
        ]
    },
    {
        id: 6,
        'fname': 'Kiran',
        'lname': 'Raokhande',
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ["March", "Aug", 'Oct'],
        result: [
            {
                subj: "M1",
                marks: 50
            },
            {
                subj: "M2",
                marks: 65
            },
            {
                subj: "M3",
                marks: 85
            }
        ]
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n        Id          :: ".concat(arrObj[i].id, "\n        First Name  :: ").concat(arrObj[i].fname, "\n        Last Name   :: ").concat(arrObj[i].lname, "\n        Country     :: ").concat(arrObj[i].country.cname, "\n        Month       :: ").concat(arrObj[i].month.join(" "), "\n        ===========Result================\n    "));
    for (var j = 0; j < arrObj[i].result.length; j++) {
        console.log("\n            Subject :: ".concat(arrObj[i].result[j].subj, " \n            marks   :: ").concat(arrObj[i].result[j].marks, "   \n        "));
    }
}
