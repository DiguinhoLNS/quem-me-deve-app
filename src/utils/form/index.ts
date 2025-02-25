export function checkFormValuesChanges<T>(values: T, initialValues: T): boolean {
    return JSON.stringify(values) !== JSON.stringify(initialValues)
}