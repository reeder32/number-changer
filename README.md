# Number Changer

#### A project that turns every day numbers into a combination of numbers and words when 1, 2, or 3 appear.

Check out page [here](https://reeder32.github.io/number-changer/)

#### By Nick Reeder

## Technologies Used

* HTML
* CSS
* Git
* Bootstrap
* JQuery
* Javascript

## Setup/Installation Requirements

1. Clone git repository [Click here](https://github.com/reeder32/number-changer.git)
2. Find _index.html_ file
3. _Open with your favorite browser_ by double clicking, or right-click -> open with...



## License

[MIT License](https://opensource.org/licenses/MIT)
&copy; 2021 Nick Reeder

## Contact Information

[email me](mailto:nickreeder32@gmail.com)

### Other projects

#### iOS work
*[Moody Weather](https://apps.apple.com/us/app/moody-weather/id1506337317)
**[Find My Mailbox](https://apps.apple.com/us/app/find-my-mailbox/id1530700085)


### Tests

Describe: evaluateInputValue(textInput, reversed)

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: evaluateInputValue(0, false);
Expected Output: 0

Test: "It should return an array with 0 and Beep! if the number 1 is inputted"
Code: evaluateInputValue(1, false);
Expected Output: "0", "Beep!"

Test: "It should return an array with 0 and Beep! and Boop! if the number 2 is inputted"
Code: evaluateInputValue(2, false);
Expected Output: "0", "Beep!, "Boop!"

Test: "It should return an array with 0 and Beep! and Boop! Won't you be my neighbor? if the number 3 is inputted"
Code: evaluateInputValue(3, false);
Expected Output: "0", "Beep!, "Boop!, Won't you be my neighbor?"

Test: "It should return a reversed string from the last one entered"
Code: evaluateInputValue(4, true);
Expected Output: "4 Won't you be my neighbor? Boop! Beep! 0"

