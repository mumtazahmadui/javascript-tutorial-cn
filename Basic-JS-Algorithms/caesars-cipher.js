

// var string ='ABC';



// string[1] = "S" No Modification in string !

// var string_2;
// var s ="S";

// var x = s.charCodeAt(0 + 13);

// var y = String.fromCharCode(x);


// console.log(x,y);
// var arr = [];

// 'ABC'.charCodeAt(0); // returns 65

// for(i=0;i<3;i++)
// {
// 	arr[i] = 
// }


// 65-90 A-Z

// var x = String.fromCharCode(65);


// string_2[0] = "a";


var string = "SERR CVMMN!";

var array_2 = [];
var index_array = [];
for(i=0;i< string.length;i++)
{

		if( string.charCodeAt(i) > 77 && string.charCodeAt(i) <= 90)
		{
					// console.log(array_2[i]);
				array_2[i] = string.charCodeAt(i) - 13;
				array_2[i] = String.fromCharCode(array_2[i]);
				// console.log(array_2[i]);
		}
		else if( string.charCodeAt(i) <= 77  && string.charCodeAt(i) >= 65 )
		{
				array_2[i] = string.charCodeAt(i) + 13;
				array_2[i] = String.fromCharCode(array_2[i]);

		}
		else
		{
				array_2[i] = string.charCodeAt(i);
				array_2[i] = String.fromCharCode(array_2[i]);
				index_array.push(i);
		}
		// console.log(array_2[i]);
}

console.log(array_2);
string_2 = array_2.join("");

console.log(string_2);
// var string_2;

// for(i=0;i<array_2.length;i++)
// {
// 	string_2[i] = array_2[i];
// }
// var split = [];
// var x = 0;
// for(i=0;i<index_array.length;i++)
// {
// 	split[i] = array_2.splice(x, index_array[i]);
// 	x = index_array[i] + 2;
// }
// console.log(split);
// var string_2 = array_2.toString();
// var string_3 = string_2.split(" ");
// console.log(string_2);


// console.log();

// var array_string = [];

// for(i=0;i<array_2.length;i++)
// {
// 	array_string.push(array_2[i]);
// }
// console.log(array_string);
// console.log(typeof(" "));
// // string = string.splice(0,1);
// var x = array_2.indexOf(" ");
// console.log(array_2);
// var array_split = array_2.splice(0,x + 1);
// var y = array_2.indexOf(" ");
// var array_2;
// console.log(array_split);



// var string = "A" 
// console.log(String.fromCharCode(string  + 13));
// var x = String.fromCharCode(65);

// console.log(x); 

// console.log(string);