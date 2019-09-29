
//set the vars for all the types of our chars
var charTypes = {
    'upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'lower': 'abcdefghijklmnopqrstuvwxyz',
    'number': '0123456789',
    'special': '!$%^&*()-=+[]{};#:@~,./<>?'
};

///fire this when loaded
window.onload = function() { 
    var inputs = document.querySelectorAll('form div input[type=text]');
    for (var i = 0; i < inputs.length; i++) { 
        var input = inputs[i];
        var div = input.parentNode; 

        //set some initials
        var type = div.id;
        input.value = charTypes[type]; //all tyoes represented
        input.size = 40;

        //reset handler
        var anchor = div.querySelector('a');
        anchor.onclick = function (input, type) {
            return function () {
                input.value = charTypes[type];
                return false;
            };
        }(input, type);
    }
}

//Generate & display the password based on user selected length & options
function _generatePassword(passwordLength, charBlocks) {
    var allChars = "";
    for (var i = 0; i < charBlocks.length; i++) {
        allChars += charBlocks[i];
    }
    
    var numChars = allChars.length;
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
        password += allChars.charAt(Math.floor(Math.random() * numChars));
    }
    return password;
}

function generatePassword(passwordLength) {
    var charBlocks = [];
    for (id in charTypes) {
        var isTicked = document.querySelector('div#' + id + ' input[type=checkbox]').checked;
        var value = document.querySelector('div#' + id + ' input[type=text]').value;
        if (isTicked) {
            charBlocks.push(value);
        }
    }
    
    var $length = document.getElementById('length');
    var passwordLength = parseInt($length.value)
    

    var password = _generatePassword(passwordLength, charBlocks);
    var $display = document.getElementById('display-password');
    $display.textContent  = password;
}

            
            
