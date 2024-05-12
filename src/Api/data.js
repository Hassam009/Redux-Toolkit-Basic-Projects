// Array of sample names
const names = ["John Smith", "Emma Johnson", "Michael Brown", "Sophia Miller", "William Wilson", "Olivia Jones", "James Davis", "Isabella Taylor", "Benjamin Martinez", "Amelia Thomas"];

// Function to generate random fake user data
export const FakeUserData = () => {
    // Get a random index from the names array
    const randomIndex = Math.floor(Math.random() * names.length);
    // Return the name at the random index
    return names[randomIndex];
}

