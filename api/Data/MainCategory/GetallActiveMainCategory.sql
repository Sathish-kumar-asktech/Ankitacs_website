select
    MainCategory_Id,
    MainCategory_Description,
    Active
from
    Tbs_MainCategory_Mst
WHERE
    Active = 'Y'
order by
    MainCategory_Id desc