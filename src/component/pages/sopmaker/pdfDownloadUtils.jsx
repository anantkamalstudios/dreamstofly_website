import React from "react";
import { pdf } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// PDF Styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 50,
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 1.8,
    textAlign: "justify",
    marginBottom: 12,
  },
  signature: {
    fontSize: 12,
    marginTop: 20,
    textAlign: "left",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
    textAlign: "center",
    fontSize: 10,
    color: "#666666",
  },
});

// PDF Document Component
const PDFDocument = ({
  text,
  title = "STATEMENT OF PURPOSE",
  applicantName,
}) => {
  // Parse the text and split into paragraphs
  const paragraphs = text.split(/\r?\n/).filter((para) => para.trim() !== "");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View>
          <Text style={styles.header}>{title}</Text>
        </View>

        {/* Content */}
        <View>
          {paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>
              {paragraph.trim()}
            </Text>
          ))}
        </View>

        {/* Footer with page number */}
        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

/**
 * Download PDF from text content
 * @param {string} text - The text content to be converted to PDF
 * @param {string} filename - The name of the downloaded file
 * @param {string} title - The title shown in PDF header (default: "STATEMENT OF PURPOSE")
 * @param {string} applicantName - Applicant's name (optional)
 */
export const downloadPDF = async (text, filename, title, applicantName) => {
  try {
    const blob = await pdf(
      <PDFDocument text={text} title={title} applicantName={applicantName} />
    ).toBlob();

    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return { success: true, message: "PDF downloaded successfully" };
  } catch (error) {
    console.error("Error generating PDF:", error);
    return { success: false, message: "Failed to generate PDF", error };
  }
};

/**
 * Download SOP as PDF
 * @param {string} sopText - The SOP text content
 * @param {string} applicantName - Applicant's name
 */
export const downloadSOPAsPDF = async (
  sopText,
  applicantName = "Applicant"
) => {
  const filename = `SOP_${applicantName.replace(
    /\s+/g,
    "_"
  )}_${Date.now()}.pdf`;
  return await downloadPDF(
    sopText,
    filename,
    "STATEMENT OF PURPOSE",
    applicantName
  );
};

/**
 * Download LOR as PDF
 * @param {string} lorText - The LOR text content
 * @param {string} applicantName - Applicant's name
 */
export const downloadLORAsPDF = async (
  lorText,
  applicantName = "Applicant"
) => {
  const filename = `LOR_${applicantName.replace(
    /\s+/g,
    "_"
  )}_${Date.now()}.pdf`;
  return await downloadPDF(
    lorText,
    filename,
    "LETTER OF RECOMMENDATION",
    applicantName
  );
};
