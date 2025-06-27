CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  UPDATE Accounts
  SET Balance = Balance + (Balance * 0.01)
  WHERE AccountType = 'Savings';

  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/


CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_name IN VARCHAR2,
  bonus_pct IN NUMBER
) AS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * bonus_pct / 100)
  WHERE Department = dept_name;

  DBMS_OUTPUT.PUT_LINE('Bonus of ' || bonus_pct || '% applied to department: ' || dept_name);
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/


CREATE OR REPLACE PROCEDURE TransferFunds(
  from_account IN NUMBER,
  to_account IN NUMBER,
  amount IN NUMBER
) AS
  source_balance NUMBER;
BEGIN
  SELECT Balance INTO source_balance FROM Accounts WHERE AccountID = from_account;

  IF source_balance < amount THEN
    DBMS_OUTPUT.PUT_LINE('Insufficient balance. Transfer aborted.');
    RETURN;
  END IF;

  UPDATE Accounts
  SET Balance = Balance - amount
  WHERE AccountID = from_account;

  UPDATE Accounts
  SET Balance = Balance + amount
  WHERE AccountID = to_account;

  DBMS_OUTPUT.PUT_LINE('Transfer of $' || amount || ' from Account ' || from_account || ' to Account ' || to_account || ' completed.');
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Invalid account ID(s).');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/

BEGIN
  ProcessMonthlyInterest;
END;
/

BEGIN
  UpdateEmployeeBonus('IT', 10);
END;
/

BEGIN
  TransferFunds(1, 2, 100);
END;
/