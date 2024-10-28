Insert into
    Tbs_MainCategory_Mst (
        MainCategory_Description,
        Active,
        Created_By,
        Created_Date
    )
Values
    (
        @MainCategory_Description,
        @Active,
        @Created_By,
        @Created_Date
    )
SELECT
    SCOPE_IDENTITY() AS MainCategory_Id