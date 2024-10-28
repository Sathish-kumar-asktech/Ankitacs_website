select
    Product_Details_Id,
    Product_Details_Description,
    Product_Details_Code,
    p.Category_Id,
    p.Active,
    Category_Description,
    p.Rate,
    p.UOM,
    Image
from
    TBS_PRODUCT_DETAILS_MST as p
    left outer join TBS_PRODUCT_CATEGORY_MST as pc on p.Category_Id = pc.Category_Id
WHERE
    p.Active = 'Y'
    AND p.Category_Id = @Category_Id
ORDER BY
    Product_Details_Id DESC;