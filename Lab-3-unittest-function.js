//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumbrId(humberID) {
    'use strict';
    var validId = false;
    var id = /^(n|N)\d{8}$/;
    if (id.test(humberID)) {
        validId = true;
    }
    return validId;
}
