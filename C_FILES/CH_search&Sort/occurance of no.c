#include <stdio.h>
#include <stdlib.h>

int main() {
    system("cls"); // Clear the console screen (specific to Windows OS)
    int a[5] = {1, 3, 2, 3, 1}; // Initialize an array with predefined values
    
    // Iterate over each element in the array
    for(int i = 0; i < 5; i++) {
        int count = 0; // Initialize count for occurrences
        int printed = 0; // Flag to check if the number was already printed
        
        // Check if the current number was already printed
        for(int k = 0; k < i; k++) {
            if(a[i] == a[k]) {
                printed = 1; // Set flag if number was already printed
                break; // Exit loop early if number was found
            }
        }
        
        // Only count and print if the number was not already printed
        if(!printed) {
            // Count occurrences of the current number
            for(int j = 0; j < 5; j++) {
                if(a[i] == a[j]) {
                    count++; // Increment count for each occurrence
                }
            }
            // Print the number and its count of occurrences
            printf("%d occurs %d times\n", a[i], count);
        }
    }
    return 0; // Return success status
}