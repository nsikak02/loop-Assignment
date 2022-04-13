// The last value is 1 because we are subtracting 1 from (i),
// and as such after 1 is zero,subtracting 1 from 1 gives us zero
// which does not satisfy our condition of (i--)
// a negative number.


// the values are 1,2,3,4 prefix ++i
// the values are 1,2,3,4 postfix i++



// the values are 1,2,3,4 postfix i++
// the values are 1,2,3,4 prefix ++i


for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

// let i = 0 ;
// while ( i < 3)
// {alert(`number ${i}!`); i++ }


// let num;
// do {
//   num = prompt('Enter a number greater than 100');
// } 
// while (num <= 100){alert('Thank you')}



let n = 10;
prime:
for (let i = 2; i <= n; i++) {
  for (let x = 2; x < i; x++) {
    if (i % x == 0) continue prime;
  }
  alert( i );
}
{alert('That\'s all between 2 to 10')}