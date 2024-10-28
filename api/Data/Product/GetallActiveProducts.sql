SELECT
    Product_Details_Id,
    Product_Details_Description,
    Product_Details_Code,
    Category_Id,
    Rate,
    UOM,
    Active,
    Image
FROM
    TBS_PRODUCT_DETAILS_MST
WHERE
    Active = 'Y'
ORDER BY
    Product_Details_Id DESC;