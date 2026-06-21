//! This module defines core schema limits used across the opaque schema ecosystem.
//!
//! These constants were previously scattered across multiple crates, leading to
//! potential drift between limits defined in `opaque-schema-core` and those
//! enforced in downstream components like `attestation-engine-v2`.
//!
//! By centralizing these values here, we ensure:
//! - Consistent behavior across the stack
//! - Easier maintenance and documentation
//! - Clearer intent behind each limit
//!
//! All dependent crates should import these constants directly instead of
//! using their own hardcoded values.
//!
//! # Limit Rationale
//!
//! - MAX_FIELDS: Controls the maximum number of fields allowed in a schema.
//!   This prevents overly complex schemas from exhausting memory or causing
//!   parsing overhead.
//!
//! - MAX_FIELD_NAME_LEN: Maximum length for field names.
//!   This balances readability with the need to avoid excessively long identifiers.
//!
//! - MAX_STRING_VALUE_LEN: Maximum length for string values.
//!   This prevents large text fields from consuming excessive memory during
//!   serialization/deserialization or validation.
//!
//! - MAX_ATTESTATION_DATA_LEN: Maximum size for attestation data payloads.
//!   This ensures attestation data remains manageable in terms of memory usage
//!   and network transfer constraints.
//!
//! # Usage
//!
//! Dependent crates should use:
//! - `crate::MAX_FIELDS`
//! - `crate::MAX_FIELD_NAME_LEN`
//! - `crate::MAX_STRING_VALUE_LEN`
//! - `crate::MAX_ATTESTATION_DATA_LEN`
//!
//! Instead of defining their own literals.

pub const MAX_FIELDS: usize = 16;

pub const MAX_FIELD_NAME_LEN: usize = 32;

pub const MAX_STRING_VALUE_LEN: usize = 128;

pub const MAX_ATTESTATION_DATA_LEN: usize = 512;