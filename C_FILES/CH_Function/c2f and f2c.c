 /** 
 * This program prompts the user to enter a temperature in Celsius and converts it to Fahrenheit,
 * then prompts the user to enter a temperature in Fahrenheit and converts it to Celsius.
 * 
 * return int Returns 0 upon successful execution.
 */

#include <stdio.h>
#include <stdlib.h>

float c2f(float); // FUNCTION PROTOTYPE
float f2c(float);
int main()
{
    system("cls"); // Clear the console screen
    float c, fahrenheit, f, f1;

    printf("Enter temperature in Celsius: ");
    scanf("%f", &c);
    fahrenheit = c2f(c); // Call the conversion function from Celsius to Fahrenheit
    printf("Temperature in Fahrenheit: %.2f\n", fahrenheit);

    printf("Enter temperature in Fahrenheit: ");
    scanf("%f", &f);
    f1 = f2c(f); // Call the conversion function from Fahrenheit to Celsius
    printf("Temperature in Celsius: %.2f\n", f1);

    return 0;
}
// Function to convert Celsius to Fahrenheit||Fahrenheit to Celsius 
float c2f(float c)
{
    return (c * 9 / 5) + 32;
}
float f2c(float f)
{
    return (f - 32) * 5 / 9;
}
