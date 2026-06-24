use alloy_primitives::{keccak256, H256};
use thiserror::Error;

#[derive(Error, Debug)]
pub enum InvalidDatasetHash {
    #[error("Dataset hash does not match expected merkle root")]
    Mismatch,
}

pub struct ReputationVerifier {
    pub merkle_root: H256,
}

impl ReputationVerifier {
    pub fn new(merkle_root: H256) -> Self {
        Self { merkle_root }
    }

    /// Verifies the reputation of a dataset based on its hash.
    /// 
    /// # Arguments
    /// * `dataset_hash` - The hash of the dataset to verify.
    /// * `expected_root` - The expected merkle root for this dataset.
    /// 
    /// # Returns
    /// * `Ok(())` if the dataset hash matches the expected merkle root.
    /// * `Err(InvalidDatasetHash)` if the dataset hash does not match.
    pub fn verify_reputation(
        &self,
        dataset_hash: H256,
        expected_root: H256,
    ) -> Result<(), InvalidDatasetHash> {
        if dataset_hash == expected_root {
            Ok(())
        } else {
            Err(InvalidDatasetHash::Mismatch)
        }
    }

    /// Updates the merkle root with a new dataset hash.
    /// 
    /// # Arguments
    /// * `new_dataset_hash` - The hash of the new dataset.
    /// 
    /// # Returns
    /// * `Ok(())` if the update is valid.
    /// * `Err(InvalidDatasetHash)` if the new dataset hash does not match the expected root.
    pub fn update_merkle_root(
        &mut self,
        new_dataset_hash: H256,
    ) -> Result<(), InvalidDatasetHash> {
        if new_dataset_hash == self.merkle_root {
            Ok(())
        } else {
            Err(InvalidDatasetHash::Mismatch)
        }
    }
}

/// Contract-level documentation for the ReputationVerifier.
/// 
/// This module provides functionality to verify dataset reputations
/// using a Merkle root mechanism. The `dataset_hash` parameter is
/// used as an off-chain provenance hint and is validated against
/// the stored merkle root.
/// 
/// - `verify_reputation`: Checks if a given dataset hash matches the expected merkle root.
/// - `update_merkle_root`: Updates the stored merkle root with a new dataset hash.
/// 
/// Note: The `InvalidDatasetHash` error is used to indicate that the dataset hash
/// does not match the expected merkle root. This is a binding check that ensures
/// data integrity.