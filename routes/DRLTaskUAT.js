function preparePayload(args) {
    const { formData, masterData, userId } = args;
    const onboardingUser = { ...masterData, ...masterData.params };
    const formIdentifier = "Full & Final Settlement";
    const formDataObj = formData[formIdentifier]?.data;
    const monthlySalary = formDataObj?.monthlySalary;
    const bonusExgratia = formDataObj?.bonusExgratia;
    const unpaidOvertimeAmount = formDataObj?.unpaidOvertimeAmount;
    const unpaidShiftAllowance = formDataObj?.unpaidShiftAllowance;
    const unpaidExgratiaAmount = formDataObj?.unpaidExgratiaAmount;
    const gratuityEligibleAmount = formDataObj?.gratuityEligibleAmount;
    const travelPaymentFnF = formDataObj?.travelPaymentFnF;
    const leaveEncashment = formDataObj?.leaveEncashment;
    const unpaidFuelAndMaint = formDataObj?.carFuelMaintenance;
    const unpaidMiscExpenses = formDataObj?.unpaidMiscExpenses;
    const fmeField = formDataObj?.fmeField;
    const financePaymentAmount = formDataObj?.financePaymentAmount;
    const OtherPayments = formDataObj?.OtherPayments;
    const vendorBalancePayment = formDataObj?.vendorBalancePayment;
    const learningAndDevelopmentPayment =
        formDataObj?.learningAndDevelopmentPayment;
    const salaryAdvance = formDataObj?.salaryAdvance;
    const imprestRecovery = formDataObj?.imprestRecovery;
    const lopDeduction = formDataObj?.lopDeduction;
    const pendingDedExcessLeaves = formDataObj?.pendingDedExcessLeaves;
    const financeAdvnaceDeductionAmount =
        formDataObj?.financeAdvnaceDeductionAmount;
    const joiningBonus = formDataObj?.joiningBonus;
    const retentionBonus = formDataObj?.retentionBonus;
    const adminDeductions = formDataObj?.adminDeductions;
    const hostelStayExpense = formDataObj?.hostelStayExpense;
    const travelDeductionFnF = formDataObj?.travelDeductionFnF;
    const laptopDeduction = formDataObj?.laptopDeduction;
    const pendingDeductionCarEmi = formDataObj?.pendingDeductionCarEmi;
    const gsaIpadDeuction = formDataObj?.gsaIpadDeuction;
    const warehouseDeduction = formDataObj?.warehouseDeduction;
    const financeVendorBalanceDeduction =
        formDataObj?.financeVendorBalanceDeduction;
    const learningAndDevelopmentDeduction =
        formDataObj?.learningAndDevelopmentDeduction;
    const Salary_related_payments =
        ((((isNaN(parseFloat(monthlySalary)) ? 0 : parseFloat(monthlySalary)) +
            (isNaN(parseFloat(bonusExgratia)) ? 0 : parseFloat(bonusExgratia)) +
            (isNaN(parseFloat(unpaidOvertimeAmount))
                ? 0
                : parseFloat(unpaidOvertimeAmount)) +
            (isNaN(parseFloat(unpaidShiftAllowance))
                ? 0
                : parseFloat(unpaidShiftAllowance))) *
            100 +
            0.5) |
            0) /
        100;
    const Statutory_payments =
        ((((isNaN(parseFloat(unpaidExgratiaAmount))
            ? 0
            : parseFloat(unpaidExgratiaAmount)) +
            (isNaN(parseFloat(gratuityEligibleAmount))
                ? 0
                : parseFloat(gratuityEligibleAmount)) +
            (isNaN(parseFloat(leaveEncashment)) ? 0 : parseFloat(leaveEncashment))) *
            100 +
            0.5) |
            0) /
        100;
    const Travel_Reimbursement_Payments =
        ((((isNaN(parseFloat(unpaidFuelAndMaint))
            ? 0
            : parseFloat(unpaidFuelAndMaint)) +
            (isNaN(parseFloat(unpaidMiscExpenses))
                ? 0
                : parseFloat(unpaidMiscExpenses)) +
            (isNaN(parseFloat(fmeField)) ? 0 : parseFloat(fmeField)) +
            (isNaN(parseFloat(travelPaymentFnF)) ? 0 : parseFloat(travelPaymentFnF)) +
            (isNaN(parseFloat(financePaymentAmount))
                ? 0
                : parseFloat(financePaymentAmount))) *
            100 +
            0.5) |
            0) /
        100;
    const others1 =
        ((((isNaN(parseFloat(OtherPayments)) ? 0 : parseFloat(OtherPayments)) +
            (isNaN(parseFloat(vendorBalancePayment))
                ? 0
                : parseFloat(vendorBalancePayment)) +
            (isNaN(parseFloat(learningAndDevelopmentPayment))
                ? 0
                : parseFloat(learningAndDevelopmentPayment))) *
            100 +
            0.5) |
            0) /
        100;
    const Salary_Advances =
        ((((isNaN(parseFloat(salaryAdvance)) ? 0 : parseFloat(salaryAdvance)) +
            (isNaN(parseFloat(imprestRecovery)) ? 0 : parseFloat(imprestRecovery)) +
            (isNaN(parseFloat(lopDeduction)) ? 0 : parseFloat(lopDeduction)) +
            (isNaN(parseFloat(pendingDedExcessLeaves))
                ? 0
                : parseFloat(pendingDedExcessLeaves)) +
            (isNaN(parseFloat(financeAdvnaceDeductionAmount))
                ? 0
                : parseFloat(financeAdvnaceDeductionAmount))) *
            100 +
            0.5) |
            0) /
        100;
    const Bonus_Recovery =
        ((((isNaN(parseFloat(joiningBonus)) ? 0 : parseFloat(joiningBonus)) +
            (isNaN(parseFloat(retentionBonus)) ? 0 : parseFloat(retentionBonus))) *
            100 +
            0.5) |
            0) /
        100;
    const Travel_Admin_Recovery =
        ((((isNaN(parseFloat(adminDeductions)) ? 0 : parseFloat(adminDeductions)) +
            (isNaN(parseFloat(hostelStayExpense))
                ? 0
                : parseFloat(hostelStayExpense)) +
            (isNaN(parseFloat(travelDeductionFnF))
                ? 0
                : parseFloat(travelDeductionFnF))) *
            100 +
            0.5) |
            0) /
        100;
    const IT_Asset_Car_Recovery =
        ((((isNaN(parseFloat(laptopDeduction)) ? 0 : parseFloat(laptopDeduction)) +
            (isNaN(parseFloat(pendingDeductionCarEmi))
                ? 0
                : parseFloat(pendingDeductionCarEmi)) +
            (isNaN(parseFloat(gsaIpadDeuction)) ? 0 : parseFloat(gsaIpadDeuction))) *
            100 +
            0.5) |
            0) /
        100;
    const others2 =
        ((((isNaN(parseFloat(warehouseDeduction))
            ? 0
            : parseFloat(warehouseDeduction)) +
            (isNaN(parseFloat(financeVendorBalanceDeduction))
                ? 0
                : parseFloat(financeVendorBalanceDeduction)) +
            (isNaN(parseFloat(learningAndDevelopmentDeduction))
                ? 0
                : parseFloat(learningAndDevelopmentDeduction))) *
            100 +
            0.5) |
            0) /
        100;
    const subTotalA =
        ((((isNaN(parseFloat(Salary_related_payments))
            ? 0
            : parseFloat(Salary_related_payments)) +
            (isNaN(parseFloat(Statutory_payments))
                ? 0
                : parseFloat(Statutory_payments)) +
            (isNaN(parseFloat(Travel_Reimbursement_Payments))
                ? 0
                : parseFloat(Travel_Reimbursement_Payments)) +
            (isNaN(parseFloat(others1)) ? 0 : parseFloat(others1))) *
            100 +
            0.5) |
            0) /
        100;
    const subTotalB =
        ((((isNaN(parseFloat(Salary_Advances)) ? 0 : parseFloat(Salary_Advances)) +
            (isNaN(parseFloat(Bonus_Recovery)) ? 0 : parseFloat(Bonus_Recovery)) +
            (isNaN(parseFloat(Travel_Admin_Recovery))
                ? 0
                : parseFloat(Travel_Admin_Recovery)) +
            (isNaN(parseFloat(IT_Asset_Car_Recovery))
                ? 0
                : parseFloat(IT_Asset_Car_Recovery)) +
            (isNaN(parseFloat(others2)) ? 0 : parseFloat(others2))) *
            100 +
            0.5) |
            0) /
        100;
    const Total_Amt_to_be_paid_to_employee =
        ((((isNaN(parseFloat(subTotalA)) ? 0 : parseFloat(subTotalA)) -
            (isNaN(parseFloat(subTotalB)) ? 0 : parseFloat(subTotalB))) *
            100 +
            0.5) |
            0) /
        100;
    const user = {
        ...formDataObj,
        displayname: masterData?.displayName,
        subTotalA,
        subTotalB,
        Salary_related_payments,
        Salary_Advances,
        Statutory_payments,
        Bonus_Recovery,
        Travel_Reimbursement_Payments,
        Travel_Admin_Recovery,
        others1,
        IT_Asset_Car_Recovery,
        learningAndDevelopmentPayment,
        others2,
        laptopDeduction,
        Total_Amt_to_be_paid_to_employee,
        monthlySalary,
        bonusExgratia,
        unpaidOvertimeAmount,
        unpaidShiftAllowance,
        unpaidExgratiaAmount,
        gratuityEligibleAmount,
        leaveEncashment,
        unpaidFuelAndMaint,
        unpaidMiscExpenses,
        fmeField,
        OtherPayments,
        financeVendorBalanceDeduction,
        learningAndDevelopmentDeduction,
        financeAdvnaceDeductionAmount,
        lopDeduction,
        salaryAdvance,
        imprestRecovery,
        pendingDedExcessLeaves,
        retentionBonus,
        gsaIpadDeuction,
        adminDeductions,
        pendingDeductionCarEmi,
        warehouseDeduction,
        financePaymentAmount,
        vendorBalancePayment,
        hostelStayExpense,
        joiningBonus,
        travelPaymentFnF,
        travelDeductionFnF,
        designation: masterData.params?.designation,
        resignationDateOnApp: moment(onboardingUser?.resignationDate).format(
            "MMMM DD,YYYY"
        ),
        hrbpApprovalDate: moment(onboardingUser?.hrbpApprovalDate).format(
            "MMMM DD,YYYY"
        ),
        empCode: masterData.params?.empCode,
        LWD: moment(onboardingUser?.lastWorkingDay).format("MMMM DD,YYYY"),
        noticePeriodShortfallDays: masterData.params?.noticePeriodShortfallDays,
        dateOfJoining: moment(onboardingUser?.doj).format("MMMM DD,YYYY"),
        currentDate: moment().format("MMMM DD,YYYY"),
    };
    return user;
}
