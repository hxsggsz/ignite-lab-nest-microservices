-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "RecipientId" TEXT NOT NULL,
    "Content" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "ReadAt" DATETIME,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Notification_id_key" ON "Notification"("id");

-- CreateIndex
CREATE INDEX "Notification_RecipientId_idx" ON "Notification"("RecipientId");
