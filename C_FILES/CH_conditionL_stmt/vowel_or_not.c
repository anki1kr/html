#include <stdio.h>

int main()
{
    char ch;
    // Ask the user to input a character
    printf("Enter a Alphabet: ");
    scanf("%c", &ch);
    // Check if the character is a vowel using switch statement
    switch (ch)
    {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        printf("%c is a vowel.\n", ch);
        break;

    default:
        printf("%c is a consonent.\n", ch);
    }

    return 0;
}
