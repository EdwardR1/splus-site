import React from "react";

const Terms = () => {
  
  return (
    <div
      className="modal fade"
      id="terms"
      tabindex="-1"
      role="dialog"
      aria-labelledby="termsModal"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 className="modal-title text-center" id="termsModal">
              Terms and Conditions
            </h2>
          </div>
          <div className="modal-body">
            <p>
              Operation
              <br />
              This website is operated by S Plus Group Limited. All inquiries
              may be directed to:
              <br />S Plus Group Limited
              <br />
              Suite 2201, Tower 2, Times Square
              <br />1 Matheson Street, Causeway Bay
              <br />
              Hong Kong, S.A.R., China
              <br />
              or
              <br />
              info@splusgroup.net
              <br />
              <br />
              Usage
              <br />
              Your use of this website is governed by these terms and
              conditions. Please take thetime to review them. Terms and
              Conditions may change from time to time. Users should routinely
              check for changes to the Terms and Conditions.
              <br />
              <br />
              Your use of www.splusgroup.net constitutes your agreement to
              follow these rules andto be bound by them. They apply to the
              entirety of the website and its contents. If you do not agree with
              any of these terms and conditions, do not use the
              www.splusgroup.net website.
              <br />
              <br />
              <br />
            </p>
            <p>
              General
              <br />
              This website and its contents on this website are intended to
              provide general information only. Therein the information, product
              and activity mentioned is related to Hong Kong and to S Plus Group
              Limited colleagues, clients and potential customers. Such
              information may be neither relevant nor appropriate for people
              located in locations outside of Hong Kong. S Plus Group Limited
              have made every effort to be as accurate as possible, however, S
              Plus Group Limited makes no warranties, either express or implied,
              as to the accuracy of the information contained in any of the
              materialson this website.
              <br />
              <br />
              <br />
            </p>
            <p>
              Ownership of rights
              <br />
              All rights, including copyright, in this website are owned by or
              licensed to S Plus Group Limited.  The materials found on
              www.splusgroup.net including but not limited to all text,
              graphics, drawings, photographs and data in whatever form are
              owned by S Plus Group Limited or related companies or licensors
              who have reserved their intellectual property rights.
              <br />
              <br />
              Any use of this website or its contents, including copying or
              storing it or them in whole or part, other than for your own
              personal, non-commercial use is prohibited without the permission
              of S Plus Group Limited. You may not modify, reproduce,
              distribute, re-post or make available to the public anything on
              this website for any purpose.
              <br />
              <br />
              <br />
              Virus to your Computer
              <br />S Plus Group Limited makes every effort to ensure that this
              website is free from bugs or viruses. We do not guarantee that
              your use of this website won’t cause damage to your computer and
              shall not be liable for loss or damage of either equipment or data
              which may arise because of using this website.
              <br />
              <br />
              <br />
            </p>
            <p>
              Links to other websites
              <br />
              www.splusgroup.net may from time to time contain links to other
              websites of interest. S Plus Group Limited cannot vet or have any
              control over their contents, therefore, S Plus Group Limited shall
              not accept any liability in respect of the use of these websites.
              <br />
              <br />
              <br />
              <br />
              Last updated on August 8, 2018
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Terms };
