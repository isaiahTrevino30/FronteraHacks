document.getElementById('situation-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form input values
    const age = parseInt(document.getElementById('age').value);
    const concern = document.getElementById('concern').value.toLowerCase();
    const children = parseInt(document.getElementById('children').value) || 0;
    const salary = parseInt(document.getElementById('salary').value);
    const status = document.getElementById('status').value;
    const partnerSalaryField = document.getElementById('partner-salary');
    const partnerSalary = parseInt(partnerSalaryField.value) || 0;

    console.log("Form values captured:", { age, concern, children, salary, status, partnerSalary });

    // Initialize advice
    let advice = '';

    // Generate advice based on age
    if (age < 30) {
        advice += "Since you're under 30, focus on long-term investments, building an emergency fund, and investing in skills or education. Don't forget to start saving for retirement early! ";
    } else if (age >= 30 && age < 50) {
        advice += "You're in the prime years for building financial stability. Diversify investments, plan for retirement, and consider saving for children's education. ";
    } else if (age >= 50 && age < 65) {
        advice += "As you approach retirement, review your savings, investments, and consider consulting a financial planner to ensure your retirement income needs are met. ";
    } else {
        advice += "At this stage, optimizing retirement savings, estate planning, and healthcare costs should be priorities. Consider long-term care insurance. ";
    }

    // Add advice based on concern
    if (concern.includes('debt')) {
        advice += "If debt is your concern, focus on reducing high-interest debt first and create a budget to manage expenses effectively. ";
    } else if (concern.includes('investment')) {
        advice += "For investment concerns, consider developing a diversified portfolio and consulting a financial advisor to align investments with your risk tolerance and goals. ";
    } else if (concern.includes('retirement')) {
        advice += "Ensure you are maximizing contributions to retirement accounts like 401(k)s or IRAs. Think about your desired retirement lifestyle and plan accordingly. ";
    } else if (concern.includes('education')) {
        advice += "If education is a concern, look into education savings accounts (ESAs) or 529 plans to help save for future tuition. Consider scholarships and financial aid options for children. ";
    } else if (concern.includes('healthcare')) {
        advice += "Healthcare costs can be significant. Invest in health savings accounts (HSAs) for tax-advantaged medical expenses and consider supplemental insurance. ";
    } else if (concern.includes('housing')) {
        advice += "If housing is a concern, consider evaluating your mortgage options. Look into refinancing for better rates or explore affordable housing programs. ";
    } else if (concern.includes('job loss')) {
        advice += "In case of job loss, focus on building a robust emergency fund, updating your resume, and networking to increase job opportunities. ";
    } else {
        advice += "It's good to prioritize financial planning and setting clear goals based on your current situation. ";
    }

    // Generate advice based on salary
    if (salary < 30000) {
        advice += "With your current salary, focus on budgeting, increasing savings, and building an emergency fund. Look for opportunities to increase your income, such as side gigs or skills training. ";
    } else if (salary >= 30000 && salary < 100000) {
        advice += "Your salary provides a strong foundation for financial growth. Consider a balanced approach with investments and savings while enjoying life. Contribute more to retirement and savings accounts. ";
    } else if (salary >= 100000 && salary < 200000) {
        advice += "With a higher salary, focus on maximizing retirement savings, exploring tax-advantaged accounts, and diversifying your investment portfolio, including real estate or index funds. ";
    } else {
        advice += "With a very high salary, explore advanced investment strategies like private equity, venture capital, and philanthropy. Ensure you're optimizing tax strategies with the help of a financial advisor. ";
    }

    // Marital status and partner salary considerations
    if (status === 'married') {
        if (partnerSalary > 0) {
            advice += `With a combined income of ${salary + partnerSalary}, focus on joint financial planning and optimizing tax benefits as a couple. Consider establishing joint savings goals for retirement and education. `;
        } else {
            advice += "As you're married but have one income, budget carefully and ensure you're building an emergency fund for your family. ";
        }
    }

    // Children considerations
    if (children > 0) {
        advice += `With ${children} child(ren), consider saving for their future through college savings plans. It's also crucial to have life insurance to protect your family. `;
        if (children > 2) {
            advice += "With a larger family, prioritize budgeting for educational expenses and healthcare. Consider setting up a family savings goal for vacations or special occasions. ";
        }
        if (children >= 4) {
            advice += "With four or more children, planning for college becomes critical. Focus on balancing immediate expenses with long-term savings for education and family well-being. ";
        }
    }

    // Advice on major life changes
    if (concern.includes('divorce')) {
        advice += "If you are facing a divorce, it's vital to understand the financial implications. Consider consulting a legal and financial advisor to protect your assets. ";
    } else if (concern.includes('retirement transition')) {
        advice += "If you are transitioning into retirement, develop a withdrawal strategy that aligns with your financial goals to ensure you don't outlive your savings. ";
    } else if (concern.includes('new job')) {
        advice += "If you've recently changed jobs, review your benefits package, particularly retirement plans and insurance options, to ensure you're making the best choices. ";
    }

    console.log("Generated advice:", advice);

    // Display advice in the advice div
    const adviceDiv = document.getElementById('advice');
    adviceDiv.style.display = 'block'; // Make sure the advice section is visible
    adviceDiv.innerHTML = `<h3>Your Personalized Advice:</h3><p>${advice}</p>`;
});

// Hide or show the partner salary field based on marital status
document.getElementById('status').addEventListener('change', function () {
    const partnerSalaryField = document.getElementById('partner-salary');
    if (this.value === 'married') {
        partnerSalaryField.required = true;
        partnerSalaryField.style.display = 'block';
    } else {
        partnerSalaryField.required = false;
        partnerSalaryField.style.display = 'none';
        partnerSalaryField.value = ''; // Clear the value if hidden
    }
});
