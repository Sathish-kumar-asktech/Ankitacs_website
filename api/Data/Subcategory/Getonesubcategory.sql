select
    Category_Code,
    Category_Id,
    Category_Description,
    Active
from
    TBS_PRODUCT_CATEGORY_MST
where
    Category_Id = @Category_Id