//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TESTS ==========
function test__checkId(valueIn, expected) {
    'use strict';
    let result = checkHumbrId(valueIn);
    var result_msg;
    if (result == expected) {
        result_msg = "<span style=color:green;>==PASSED==</span>";
    } else {
        result_msg = "<span style=color:red;> XX FAILED XX</span>";
    }
    let msg = 'Expected result:' + expected + result_msg + '<br/>';
    let msgbox = document.getElementById('data');
    msgbox.innerHTML += msg;
}
// true
test__checkId('n12345678', true);
// true
test__checkId('N12345678', true);
// 7 digit-false
test__checkId('n1234567', false);
// 9 digit-false
test__checkId('n123456789', false);
// 2 letter-false
test__checkId('ab12345678', false);
// all number
test__checkId('1123456789', false);
// test fail
test__checkId('1123456789', true);



