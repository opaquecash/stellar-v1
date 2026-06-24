pub mod errors;
pub mod schema;

/// Centralized limits for opaque-schema-core.
///
/// These constants define maximum allowed sizes and counts for various schema-related
/// fields and values. They are shared across modules to prevent drift between
/// opaque-schema-core and its consumers like attestation-engine-v2.
///
/// MAX_FIELDS: Maximum number of fields allowed in a single schema.
/// MAX_FIELD_NAME_LEN: Maximum length of a field name.
/// MAX_STRING_VALUE_LEN: Maximum length of a string value.
/// MAX_ATTESTATION_DATA_LEN: Maximum length of attestation data.
///
/// These values are chosen based on practical constraints and compatibility
/// requirements for the attestation system.
pub const MAX_FIELDS: usize        = 16;
pub const MAX_FIELD_NAME_LEN: usize = 32;
pub const MAX_STRING_VALUE_LEN: usize = 128;
pub const MAX_ATTESTATION_DATA_LEN: usize = 512;