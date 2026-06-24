// opaque-schema-core
//
// This module defines core schema limits used across the opaque schema ecosystem.
// These constants are shared to prevent drift between components like
// attestation-engine-v2 and opaque-schema-core.
//
// Rationale:
// - MAX_FIELDS: Limits the number of fields in a schema to prevent excessive
//   parsing and memory usage while allowing flexibility.
// - MAX_FIELD_NAME_LEN: Ensures field names are reasonably short to avoid
//   name collisions and parsing overhead.
// - MAX_STRING_VALUE_LEN: Caps string values to prevent large payloads from
//   consuming excessive memory during serialization/deserialization.
// - MAX_ATTESTATION_DATA_LEN: Limits attestation data size to ensure
//   compatibility with smaller attestors and secure memory handling.
//
// All dependent modules must import these constants directly.

pub const MAX_FIELDS: usize = 16;
pub const MAX_FIELD_NAME_LEN: usize = 32;
pub const MAX_STRING_VALUE_LEN: usize = 128;
pub const MAX_ATTESTATION_DATA_LEN: usize = 512;