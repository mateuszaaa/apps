// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, undefined],
      types: {
          Header: {
            parentHash: "Hash",
            number: "Compact<BlockNumber>",
            stateRoot: "Hash",
            extrinsicsRoot: "Hash",
            digest: "Digest",
            count: "BlockNumber",
          },
      }
    }
  ]
};

export default definitions;
