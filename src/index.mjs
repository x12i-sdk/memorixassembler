import assert from 'node:assert/strict';
import { readRecordIdentity, buildIdentityQuery } from '@x12i/memorixassembler';
const record = { recordId: 'asset-1', data: { name: 'Demo asset' } };
const identity = readRecordIdentity(record);
assert.deepEqual(identity, { value: 'asset-1', field: 'recordId' });
const query = buildIdentityQuery(identity);
assert.deepEqual(query, { recordId: 'asset-1' });
assert.equal(readRecordIdentity({ data: {} }), null);
console.log({ identity, query });
