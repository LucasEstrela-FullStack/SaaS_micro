/*
  Warnings:

  - The values [PEDING] on the enum `PaymanetStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnuma
BEGIN;
CREATE TYPE "PaymanetStatus_new" AS ENUM ('PENDING', 'PAID', 'FAILED');
ALTER TABLE "Donation" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Donation" ALTER COLUMN "status" TYPE "PaymanetStatus_new" USING ("status"::text::"PaymanetStatus_new");
ALTER TYPE "PaymanetStatus" RENAME TO "PaymanetStatus_old";
ALTER TYPE "PaymanetStatus_new" RENAME TO "PaymanetStatus";
DROP TYPE "PaymanetStatus_old";
ALTER TABLE "Donation" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "Donation" ALTER COLUMN "status" SET DEFAULT 'PENDING';
