export function social_security(salary, month_13) {
  if (month_13 == false) {
    var socialSecurity = salary * 0.0975;
  } else {
    var socialSecurity = salary * 0.0725;
  }
  return round(socialSecurity, 2);
}

export function educational_insurance(salary) {
  var edcucationalInsurance = salary * 0.0125;
  return round(edcucationalInsurance, 2);
}

export function search_period(payment_frecuency) {
  var period_number = null;
  if (payment_frecuency == "Semanal") {
    period_number = (4 + 1 / 3) * 13;
  } else if (payment_frecuency == "Bisemanal") {
    period_number = ((4 + 1 / 3) * 13) / 2;
  } else if (payment_frecuency == "Quincenal") {
    period_number = 13 * 2;
  } else if (payment_frecuency == "Mensual") {
    period_number = 13;
  }
  return period_number;
}

export function anual_salary(salary, period_number) {
  var anual_salary = salary * period_number;
  return round(anual_salary, 2);
}

export function anual_islr(anual_salary) {
  var islr_amount = 0;
  console.log("Salario anual: %o", anual_salary);
  if (anual_salary <= 11000) {
    return round(islr_amount, 2);
  } else if (anual_salary > 11000 && anual_salary <= 50000) {
    islr_amount = (anual_salary - 11000) * 0.15;
  } else if (anual_salary > 50000) {
    var islr_amount_first = (anual_salary - 50000) * 0.25;
    var islr_amount_second = (50000 - 11000) * 0.15;
    islr_amount = islr_amount_first + islr_amount_second;
  }
  return round(islr_amount, 2);
}

export function islr(anual_islr_amount, period_number) {
  var islr_amount = anual_islr_amount / period_number;
  return round(islr_amount, 2);
}

export function salary_conversion(salary, payment_frecuency) {
  var salary_amount = null;
  if (payment_frecuency == "Semanal") {
    salary_amount = salary * 48;
  } else if (payment_frecuency == "Bisemanal") {
    salary_amount = salary * 96;
  } else if (payment_frecuency == "Quincenal") {
    salary_amount = salary * 120;
  } else if (payment_frecuency == "Mensual") {
    salary_amount = salary * 207.84;
  }
  return round(salary_amount, 2);
}

export function monthly_salary(salary, payment_frecuency) {
  if (payment_frecuency == "Semanal") {
    return round(salary * (4 + 1 / 3), 2);
  } else if (payment_frecuency == "Bisemanal") {
    return round((salary * (4 + 1 / 3)) / 2, 2);
  } else if (payment_frecuency == "Quincenal") {
    return round(salary * 2, 2);
  } else if (payment_frecuency == "Mensual") {
    return round(salary, 2);
  }
  return 0;
}

export function thirteenth_month(salary) {
  return round(salary / 3, 2);
}

export function average_amount(
  first_amount,
  second_amount,
  third_amount,
  fourth_amount,
  fifth_amount
) {
  var average_amount =
    (first_amount + second_amount + third_amount + fourth_amount + fifth_amount) / 4;
  return round(average_amount, 2);
}

export function find_vacation_amount(Object, last_salary) {
  var amounts = 0;
  for (var amount in Object) {
    amounts = amounts + parseFloat(Object[amount]);
  }
  if (amounts > last_salary) {
    return amounts / 11;
  } else {
    return last_salary;
  }
}

export function total_years(settlement_entry_year, settlement_egress_year) {
  var total_years = settlement_egress_year - settlement_entry_year;
  return total_years;
}

export function average_weekly_salary(accumulated_salary_input, total_years) {
  const weeks = 52;
  if (total_years >= 5) {
    return round(accumulated_salary_input / 260, 2);
  }
  var weekly_years = weeks * total_years;
  return round(accumulated_salary_input / weekly_years, 2);
}

export function seniority_premium(
  average_weekly_salary,
  total_years,
  settlement_dismissal_type,
  extra_month
) {
  var first_amount = 0;
  var second_amount = 0;

  second_amount = (extra_month / 12) * average_weekly_salary;

  if (settlement_dismissal_type == "Justificado") {
    first_amount = average_weekly_salary * total_years;
  } else if (settlement_dismissal_type == "Injustificado") {
    first_amount = average_weekly_salary * total_years * 3.4;
  }
  return round(first_amount + second_amount, 2);
}

export function round(num, decimales) {
  var signo = num >= 0 ? 1 : -1;
  num = num * signo;
  if (decimales === 0)
    //con 0 decimales
    return signo * Math.round(num);
  // round(x * 10 ^ decimales)
  num = num.toString().split("e");
  num = Math.round(+(num[0] + "e" + (num[1] ? +num[1] + decimales : decimales)));
  // x * 10 ^ (-decimales)
  num = num.toString().split("e");
  return signo * (num[0] + "e" + (num[1] ? +num[1] - decimales : -decimales));
}
