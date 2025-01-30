#include <stdio.h>
#include <stdlib.h>

int main()
{
  system("cls"); // Clear the console screen (specific to Windows OS).
  
  // Variables to store the number, remainder, and result.
  int n, r, num, res = 0;
  
  // Prompt the user to enter a number.
  printf("enter the number=");
  scanf("%d", &num);
  
  // Store the original number for later comparison.
  n = num;
  
  // Reverse the number.
  while (n > 0)
  {
    r = n % 10; // Get the last digit of the number.
    res = res * 10 + r; // Append the digit to the reversed number.
    n = n / 10; // Remove the last digit from the number.
  }
  
  // Output the reversed number.
  printf("reverse of %d is %d\n", num, res);

  // Check if the original number is a palindrome.
  if (num == res)
    printf("%d is a palindrome number\n", num);
  else
    printf("%d is not a palindrome number\n", num);
}
