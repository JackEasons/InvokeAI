import { Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { COLUMN_WIDTHS } from './constants';
import { useTranslation } from 'react-i18next';
const QueueListHeader = () => {
  const { t } = useTranslation();
  return (
    <Flex
      alignItems="center"
      gap={4}
      p={1}
      pb={2}
      textTransform="uppercase"
      fontWeight={700}
      fontSize="xs"
      letterSpacing={1}
    >
      <Flex
        w={COLUMN_WIDTHS.number}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Text variant="subtext">#</Text>
      </Flex>
      <Flex ps={0.5} w={COLUMN_WIDTHS.statusBadge} alignItems="center">
        <Text variant="subtext">{t('queue.status')}</Text>
      </Flex>
      <Flex ps={0.5} w={COLUMN_WIDTHS.time} alignItems="center">
        <Text variant="subtext">{t('queue.time')}</Text>
      </Flex>
      <Flex ps={0.5} w={COLUMN_WIDTHS.batchId} alignItems="center">
        <Text variant="subtext">{t('queue.batch')}</Text>
      </Flex>
      <Flex ps={0.5} w={COLUMN_WIDTHS.fieldValues} alignItems="center">
        <Text variant="subtext">{t('queue.batchFieldValues')}</Text>
      </Flex>
    </Flex>
  );
};

export default memo(QueueListHeader);
