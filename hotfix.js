function handleApplicationCrash(error) {
    console.error("Application Error:", error);

    return "Application Recovered";
}

module.exports = handleApplicationCrash;