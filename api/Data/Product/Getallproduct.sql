select
    Product_Details_Id,
    Product_Details_Description,
    Product_Details_Code,
    Category_Id,
    Rate,
    UOM,
    Active,
    Image
from
    TBS_PRODUCT_DETAILS_MST
order by
    Product_Details_Id desc