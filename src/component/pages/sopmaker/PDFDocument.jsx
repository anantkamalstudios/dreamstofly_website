import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

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

const PDFDocument = ({
  text,
  title = "STATEMENT OF PURPOSE",
  applicantName,
}) => {
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

export default PDFDocument;
