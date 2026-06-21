// opaque-schema-core
//
// This module defines core schema limits used across the opaque ecosystem.
// These constants are shared to prevent drift between components like
// opaque-schema-core and attestation-engine-v2.
//
// Rationale:
// - MAX_FIELDS: Limits the number of fields in a schema to prevent
//   excessive memory usage and parsing complexity.
// - MAX_FIELD_NAME_LEN: Ensures field names are reasonably short to
//   keep schema parsing efficient and reduce memory overhead.
// - MAX_STRING_VALUE_LEN: Caps string values to avoid oversized payloads
//   that could exhaust buffers in parsing or verification.
// - MAX_ATTESTATION_DATA_LEN: Sets an upper bound on attestation data
//   size to prevent denial-of-service attacks and ensure predictable
//   resource usage.
//
// These values are chosen based on practical constraints of current
// implementations and expected usage patterns.

pub const MAX_FIELDS: usize = 16;
pub const MAX_FIELD_NAME_LEN: usize = 32;
pub const MAX_STRING_VALUE_LEN: usize = 128;
pub const MAX_ATTESTATION_DATA_LEN: usize = 512;