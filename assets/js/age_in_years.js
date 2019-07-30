'use strict'

var birthday = new Date('05 Sept 1990')
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs); // miliseconds from epoch
var ageInYears = Math.abs(ageDate.getUTCFullYear() - 1970);
document.getElementById('myAge').innerHTML = ageInYears
