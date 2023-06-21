function letterCombinations(input_digit) {
  //Complete the function
	let letter = {
		"2" : "abc",
		"3" : "def",
		"4" : "ghi",
		"5" : "jkl",
		"6" : "mno",
		"7" : "pqrs",
		"8" : "tuv",
		"9" : "wxyz"
	}

	let ans = [];

      function solve(currentIdx, currentString) {
        if (input_digit.length<=currentIdx) {
          ans.push(currentString);
          return;
        }
        let currentChar = input_digit[currentIdx];
        for (let i = 0; i < letter[currentChar].length; i++) {
          solve(currentIdx + 1, currentString + letter[currentChar][i]);
        }
      }
      solve(0, "");
	return ans;
}

module.exports = letterCombinations;
