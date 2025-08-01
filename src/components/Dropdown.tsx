import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { colors } from '../constants/colors';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  placeholder: string;
  options: DropdownOption[];
  value: string;
  onValueChange: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  options,
  value,
  onValueChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    options.find(option => option.value === value) || null
  );

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    onValueChange(option.value);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsOpen(true)}
        activeOpacity={0.7}
      >
        <Text style={styles.dropdownText}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Text style={styles.dropdownIcon}>▼</Text>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{label}</Text>
              <TouchableOpacity onPress={() => setIsOpen(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.option,
                  selectedOption?.value === option.value && styles.selectedOption
                ]}
                onPress={() => handleSelect(option)}
              >
                <Text style={[
                  styles.optionText,
                  selectedOption?.value === option.value && styles.selectedOptionText
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    backgroundColor: colors.card,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  dropdownIcon: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxHeight: '60%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  closeButton: {
    fontSize: 20,
    color: colors.textSecondary,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 4,
  },
  selectedOption: {
    backgroundColor: colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: colors.text,
  },
  selectedOptionText: {
    color: colors.textDark,
    fontWeight: '600',
  },
}); 