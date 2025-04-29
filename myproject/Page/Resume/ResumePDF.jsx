import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  PDFDownloadLink,
  StyleSheet,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "bold",
    borderBottom: "1px solid #000",
    paddingBottom: 4,
  },
  text: {
    marginBottom: 4,
  },
  list: {
    marginBottom: 8,
    paddingLeft: 15,
  },
});

// Resume Component for PDF
const ResumePDF = ({ resume, freelancer }) => {
  return (
    <Document>
      <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {freelancer?.firstname} {freelancer?.lastname}
          </Text>
          <Text>{freelancer?.email}</Text>
          <Text>{freelancer?.phoneNumber}</Text>
          <Text>
            GitHub: {freelancer?.GitHub} | LinkedIn: {freelancer?.Blog}
          </Text>
        </View>

        {/* Work Experience Section */}
        {resume?.job.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {resume.job.map((job) => (
              <View key={job.id} style={styles.text}>
                <Text>
                  {job.organization} ({job.Location}) — {job.Designation} (
                  {job.Startdate} - {job.enddate})
                </Text>
                <Text>{job.Description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education Section */}
        {resume?.education.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Education</Text>
            {resume.education.map((edu) => (
              <View key={edu.id} style={styles.text}>
                <Text>{edu.organization}</Text>
                <Text>
                  {edu.degree} in {edu.branch} ({edu.startyear} - {edu.endyear})
                </Text>
                <Text>Grade: {edu.grade}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills Section */}
        {resume?.skills.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.list}>
              {resume.skills.map((skill) => (
                <Text key={skill.id} style={styles.text}>
                  {skill.skill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Projects Section */}
        {resume?.projects.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Projects</Text>
            {resume.projects.map((project) => (
              <View key={project.id} style={styles.text}>
                <Text>{project.title}</Text>
                <Text>{project.Description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Accomplishments Section */}
        {resume?.accomplishments.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Accomplishments</Text>
            <View style={styles.list}>
              {resume.accomplishments.map((acc) => (
                <Text key={acc.id} style={styles.text}>
                  {acc.Additionaldetails}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Responsibilities Section */}
        {resume?.responsibilities.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Responsibilities</Text>
            <View style={styles.list}>
              {resume.responsibilities.map((resp) => (
                <Text key={resp.id} style={styles.text}>
                  {resp.Description}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

// Exportable Component
const DownloadResume = ({ resume, freelancer }) => {
  return (
    <div className="pt-5">
      <PDFDownloadLink
        document={<ResumePDF resume={resume} freelancer={freelancer} />}
        fileName="Resume.pdf"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {({ loading }) => (loading ? "Loading Document..." : "Download Resume")}
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadResume;



// ??  ??
//?