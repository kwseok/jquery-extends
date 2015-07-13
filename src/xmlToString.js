import './proto/index'

/**
 * @param {XML} xmlNode the xml node.
 * @return {string}
 */
$.xmlToString = function(xmlNode) {
    try {
        return (new XMLSerializer()).serializeToString(xmlNode);
    } catch (_error) {
        if (xmlNode.xml == null)
            throw new Error("XMLSerializer not supported");

        return xmlNode.xml;
    }
};

export default $.xmlToString;
