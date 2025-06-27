Begin
    for cust in (select CustomerID, DOB from Customers) Loop
        Declare
            v_age Number;
        Begin
            v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, cust.DOB)/12);
            if v_age>60 Then
                Update Loans
                Set InterestRate = InterestRate - 1
                where CustomerID=cust.CustomerID;
            END If;
        END;
    END Loop;
    Commit;
END;
/

BEGIN
  FOR cust IN (SELECT CustomerID, Balance FROM Customers) LOOP
    IF cust.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 1
      WHERE CustomerID = cust.CustomerID;
    ELSE
      UPDATE Customers
      SET IsVIP = 0
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;
/


BEGIN
  FOR loan IN (
    SELECT C.Name AS CustomerName, L.EndDate
    FROM Loans L
    JOIN Customers C ON C.CustomerID = L.CustomerID
    WHERE L.EndDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: ' || loan.CustomerName || ' has a loan due on ' || TO_CHAR(loan.EndDate, 'YYYY-MM-DD'));
  END LOOP;
END;
/