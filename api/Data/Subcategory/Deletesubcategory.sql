IF EXISTS (
    SELECT
        *
    FROM
        TBS_PRODUCT_DETAILS_MST
    WHERE
        Category_Id = @Category_Id
) BEGIN RAISERROR(
    'Cannot delete category because it exists in TBS_PRODUCT_DETAILS_MST.',
    16,
    1
);END ELSE BEGIN
DELETE FROM
    TBS_PRODUCT_CATEGORY_MST
WHERE
    Category_Id = @Category_Id;END